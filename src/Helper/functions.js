
export const formatTime = (seconds) => {
    // Ensure `seconds` is a valid number
    console.log('elapsedTime : ', seconds)
    // if (typeof seconds !== undefined || isNaN(seconds) || seconds < 0) {
    //     return "00:00:00";
    // }

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    // Format as HH:mm:ss
    const formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        secs.toString().padStart(2, "0"),
    ].join(":");

    return formattedTime;
};

export const formatDateTime = (dateTime) => {

    const date = new Date(dateTime);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, "0");
    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
};

export const decodeBase64Url = (base64Url) => {
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
    );
    return JSON.parse(jsonPayload);
};

export const convertSecondsToHHMMSS = (sec) => {
    console.log('sec : ' , sec)
    if (!sec) {
        return `00:00:00`;
    }
    let totalSeconds = Math.round(sec);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = (totalSeconds % 3600) % 60;

    // Format hours, minutes, and seconds to be two digits
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
export const processWeeklyData = (response,overTimeRate =0,rate ) => {
    if(!response) return [];

    const MAX_HOURS = 40;
    const OVERTIME_MULTIPLIER = overTimeRate;
    const SECONDS_IN_AN_HOUR = 3600;
  
    const processedData = response.map(job => {
      // Total seconds from the response
      const totalSeconds = job.totalDuration;
      // Convert total seconds to hours
      const totalHours = totalSeconds / SECONDS_IN_AN_HOUR;
      // Calculate overtime hours
      const overtimeHours = totalHours > MAX_HOURS ? totalHours - MAX_HOURS : 0;
      const normalHours = totalHours > MAX_HOURS ? MAX_HOURS : totalHours;
  
      // Calculate payments
      const normalPay = normalHours * rate;
      const overtimePay = overtimeHours * rate * OVERTIME_MULTIPLIER;
      const totalPay = normalPay + overtimePay;
  
      // Format the output
      return {
        empId: 'EMP'+job.employeeId,
        employeeName: job.employeeName,
        ssnNo: job.ssnNo,
        jobName: job.jobName,
        weekRange:job.weekRange,
        rate:'$'+rate,
        totalHours: `${Math.floor(totalHours)} hr ${Math.round((totalHours % 1) * 60)} min`,
        overtimeHours: `${Math.floor(overtimeHours)} hr ${Math.round((overtimeHours % 1) * 60)} min`,
        normalPay: '$'+normalPay.toFixed(2),
        overTimeRate:'$'+overTimeRate,
        overtimePay: '$'+overtimePay.toFixed(2),
        totalPay: '$'+totalPay.toFixed(2),
      };
    });
  
    return processedData;
  };
  