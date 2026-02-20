import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import axios from 'axios';
import { BaseUrl } from "../common/BaseUrl";
import moment from 'moment';

function EditModal({ open, setOpen, data, setData, refresh, setRefresh }) {
    const [loading, setLoading] = useState(true);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const getSingleJobData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/tracking/get-by-id/${data?.id}`);
            const { startTime, endTime } = response.data.result;

            // Convert ISO 8601 format to HH:mm
            setStartTime(moment(startTime).format('HH:mm'));
            setEndTime(moment(endTime).format('HH:mm'));

            setLoading(false);
        } catch (error) {
            console.log("error: ", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (open) {
            getSingleJobData();
        }
    }, [open]);

    const handleClose = () => {
        setOpen(false);
        setData({ name: '', id: '' });
        setStartTime("");
        setEndTime("");
    };

    const handleSubmit = async () => {
        // const currentDate = moment().format('YYYY-MM-DD');
        // const isoStartTime = moment(`${currentDate} ${startTime}`, 'YYYY-MM-DD HH:mm').toISOString();
        // const isoEndTime = moment(`${currentDate} ${endTime}`, 'YYYY-MM-DD HH:mm').toISOString();

        // Calculate time difference in seconds
        const start = moment(startTime, 'HH:mm');
        const end = moment(endTime, 'HH:mm');

        // If end is before start, add one day to end
        if (end.isBefore(start)) {
            // end.add(1, 'day');
            alert('End time cannot be before start time.');
            return;
        }

        const diffInSeconds = end.diff(start, 'seconds');

        // console.log("Time difference: ", diffInSeconds);
        // Convert HH:mm format back to ISO 8601 format
        const isoStartTime = moment().set('hour', startTime.split(':')[0]).set('minute', startTime.split(':')[1]).toISOString();
        const isoEndTime = moment().set('hour', endTime.split(':')[0]).set('minute', endTime.split(':')[1]).toISOString();

        // Calculate time difference in seconds
        // const start = moment(startTime, 'HH:mm');
        // const end = moment(endTime, 'HH:mm');
        // const diffInSeconds = end.diff(start, 'seconds');

        return await axios.post(`${BaseUrl}/tracking/update-time`, { id: data?.id, startTime: isoStartTime, endTime: isoEndTime, count: diffInSeconds }).then((response) => {
            setRefresh(!refresh)
            handleClose();
        }).catch((error) => {
            console.log("handleSubmit error: ", error);
            alert(error?.response?.data?.msg)
        })
    };

    return (
        <Dialog open={open} onClose={setOpen} className="fixed inset-0 z-10 overflow-y-auto">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="flex items-center justify-center min-h-screen text-center">
                <DialogPanel className="w-full max-w-screen-md transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                <div className='flex justify-between items-center'>
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-green-600">Edit {data?.name}</DialogTitle>
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 cursor-pointer" onClick={handleClose}>
                                        <svg className="w-8 h-8" fill='red' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <form className="max-w-[20rem] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="start-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start time:</label>
                                            <div className="relative">
                                                <input type="time" id="start-time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                                                <div className="absolute inset-y-0 right-0 top-0 flex items-center pr-3 pointer-events-none">
                                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="end-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End time:</label>
                                            <div className="relative">
                                                <input type="time" id="end-time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                                                <div className="absolute inset-y-0 right-0 top-0 flex items-center pr-3 pointer-events-none">
                                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" onClick={handleClose} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel</button>
                        <button type="button" data-autofocus onClick={handleSubmit} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Submit</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default EditModal;
