import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAssignedDocuments,
  uploadDocument,
  clearUploadSuccess,
  clearError,
} from "../../store/AssignedDocuments/assignedDocumentsSlice";
import { BaseUrl } from "../common/BaseUrl";
import { toast } from "react-toastify";
import { getPdfForm } from "../../PdfForms";

// Document Base URL (without /v1)
const DocBaseUrl = BaseUrl.replace("/v1", "");

// Map document codes to form IDs and templates - matches PdfForms/index.js registry
const formCodeData = {
  "1020": { id: 1, template: "/forms/employment-application.pdf" },
  "1021": { id: 2, template: "/forms/equal-opportunity.pdf" },
  "1050": { id: 3, template: "/forms/skills-checklist.pdf" },
  "1060": { id: 4, template: "/forms/request-for-reference.pdf" },
  "1070": { id: 5, template: "/forms/background-check.pdf" },
  "1204": { id: 6, template: "/forms/care-availability.pdf" },
  "1010": { id: 7, template: "/forms/employee-personal-action.pdf" },
  "1201": { id: 8, template: "/forms/handbook-acknowledgment.pdf" },
  "1202": { id: 9, template: "/forms/orientation-acknowledgements.pdf" },
  "1203": { id: 10, template: "/forms/orientation-curriculum.pdf" },
  "1220": { id: 11, template: "/forms/abuse-neglect-policy.pdf" },
  "1530": { id: 12, template: "/forms/care-schedule-acknowledgement.pdf" },
  "1600": { id: 13, template: "/forms/emergency-contact.pdf" },
  "1720": { id: 14, template: "/forms/hepatitis-b-consent.pdf" },
  "1740": { id: 15, template: "/forms/drug-consent.pdf" },
  "2900": { id: 16, template: "/forms/id-agreement.pdf" },
  "4000": { id: 17, template: "/forms/nondisclosure-noncompete.pdf" },
  "I-9": { id: 18, template: "/forms/i9-form.pdf" },
  "W-4": { id: 19, template: "/forms/w4-form-2023.pdf" },
};

// Check if document has an interactive form
const hasInteractiveForm = (docCode) => {
  return !!formCodeData[docCode];
};

// Get form component for document code
const getFormForDocument = (docCode) => {
  const formData = formCodeData[docCode];
  return formData ? getPdfForm(formData.id) : null;
};

// Get template URL for document code
const getTemplateUrl = (docCode) => {
  const formData = formCodeData[docCode];
  return formData?.template || null;
};

const MyDocuments = () => {
  const dispatch = useDispatch();
  const { documents, loading, uploadLoading, error, uploadSuccess } = useSelector(
    (state) => state.assignedDocuments
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const fileInputRef = useRef(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchAssignedDocuments());
  }, [dispatch]);

  useEffect(() => {
    if (uploadSuccess) {
      toast.success("Document submitted successfully!");
      setSelectedFile(null);
      setShowModal(false);
      setShowFormModal(false);
      setSelectedDoc(null);
      dispatch(clearUploadSuccess());
    }
  }, [uploadSuccess, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  // Lock body scroll when form modal is open
  useEffect(() => {
    if (showFormModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showFormModal]);

  // Inject form modal styles
  useEffect(() => {
    if (document.getElementById("employee-form-modal-styles")) return;
    const style = document.createElement("style");
    style.id = "employee-form-modal-styles";
    style.textContent = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes modalSlideIn { from { opacity: 0; transform: scale(0.96) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      
      .employee-form-body .fixed.inset-0 {
        position: static !important;
        background-color: transparent !important;
        display: block !important;
        padding: 0 !important;
        z-index: auto !important;
      }
      .employee-form-body .fixed.inset-0 > .bg-white.rounded-lg {
        max-width: 100% !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleOpenModal = (doc) => {
    const docCode = doc.documentId?.docIdentity;
    
    // Check if this document has an interactive form
    if (hasInteractiveForm(docCode)) {
      setSelectedDoc(doc);
      setShowFormModal(true);
    } else {
      // Fall back to file upload modal for vendor-uploaded documents
      setSelectedDoc(doc);
      setSelectedFile(null);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowFormModal(false);
    setSelectedDoc(null);
    setSelectedFile(null);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile && selectedDoc) {
      dispatch(uploadDocument({ documentId: selectedDoc._id, file: selectedFile }));
    }
  };

  // Handle form submission success
  const handleFormSuccess = () => {
    toast.success("Form submitted successfully!");
    setShowFormModal(false);
    setSelectedDoc(null);
    dispatch(fetchAssignedDocuments());
  };

  const getDocumentUrl = (fileUrl) => {
    if (!fileUrl) return null;
    const cleanFileUrl = fileUrl.startsWith('/') ? fileUrl.slice(1) : fileUrl;
    return `${DocBaseUrl}/${cleanFileUrl}`;
  };

  const getStatusBadge = (status) => {
    const statusLower = status?.toLowerCase() || 'pending';
    let displayStatus = status;
    let style = "bg-yellow-100 text-yellow-800 border border-yellow-300";
    
    if (statusLower === 'completed' || statusLower === 'submitted') {
      displayStatus = "Completed";
      style = "bg-green-100 text-green-800 border border-green-300";
    } else if (statusLower === 'in progress' || statusLower === 'inprogress') {
      displayStatus = "In Progress";
      style = "bg-blue-100 text-blue-800 border border-blue-300";
    } else {
      displayStatus = "Pending";
    }
    
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${style}`}>
        {displayStatus}
      </span>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Documents</h1>
          <p className="text-gray-600 mt-1">View and complete your assigned documents</p>
        </div>

        {documents.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No Documents Assigned</h3>
            <p className="mt-2 text-gray-500">You don't have any documents assigned yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assigned By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assigned Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc) => {
                    const docCode = doc.documentId?.docIdentity;
                    const isInteractiveForm = hasInteractiveForm(docCode);
                    
                    return (
                    <tr key={doc._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <svg
                            className="h-8 w-8 text-green-600 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {doc.documentId?.fileName || doc.documentId?.docIdentity || "Document"}
                            </div>
                            {docCode && (
                              <span className="text-xs text-gray-500">Code: {docCode}</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {doc.assignedBy?.name || doc.assignedBy?.email || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{formatDate(doc.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(doc.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {doc.status?.toLowerCase() === "completed" ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-green-600 text-sm font-medium">Submitted</span>
                            {doc.submittedFileUrl && (
                              <button
                                onClick={() => window.open(getDocumentUrl(doc.submittedFileUrl), '_blank')}
                                className="text-blue-600 hover:underline text-sm"
                              >
                                View
                              </button>
                            )}
                          </div>
                        ) : (
                          <button
                            onClick={() => handleOpenModal(doc)}
                            className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center"
                          >
                            {isInteractiveForm ? (
                              <>
                                <svg
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                                Fill Form
                              </>
                            ) : (
                              <>
                                <svg
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                  />
                                </svg>
                                Upload
                              </>
                            )}
                          </button>
                        )}
                      </td>
                    </tr>
                  );})}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Form Modal */}
      {showFormModal && selectedDoc && getFormForDocument(selectedDoc.documentId?.docIdentity) && (() => {
        const FormComponent = getFormForDocument(selectedDoc.documentId?.docIdentity);
        return (
          <div
            onClick={handleCloseModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 99999,
              animation: "fadeIn 0.2s ease-in-out",
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
                width: "100%",
                maxWidth: "1100px",
                maxHeight: "95vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                animation: "modalSlideIn 0.3s ease-out",
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  background: "linear-gradient(135deg, #108a00 0%, #1a9e0f 50%, #28a745 100%)",
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 384 512">
                      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                  </div>
                  <div>
                    <h5 style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: "17px" }}>
                      {selectedDoc.documentId?.fileName || "Onboarding Form"}
                    </h5>
                    <p style={{ margin: "2px 0 0", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                      Code: {selectedDoc.documentId?.docIdentity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.15)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.25)")}
                  onMouseLeave={(e) => (e.target.style.background = "rgba(255,255,255,0.15)")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </button>
              </div>

              {/* Modal Body - Form Content */}
              <div
                className="employee-form-body"
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "0",
                  background: "#f8fafc",
                }}
              >
                <FormComponent
                  document={{
                    _id: selectedDoc._id,
                    assignmentId: selectedDoc._id,
                    url: getTemplateUrl(selectedDoc.documentId?.docIdentity),
                    name: selectedDoc.documentId?.fileName || selectedDoc.documentId?.docIdentity,
                    ...selectedDoc.documentId
                  }}
                  token={token}
                  onClose={handleCloseModal}
                  onSuccess={handleFormSuccess}
                />
              </div>
            </div>
          </div>
        );
      })()}

      {/* Document Upload Modal */}
      {showModal && selectedDoc && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" 
              onClick={handleCloseModal}
            ></div>

            {/* Modal panel */}
            <div className="relative inline-block w-full max-w-4xl p-0 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedDoc.documentId?.fileName || selectedDoc.documentId?.docIdentity || "Document"}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Document Preview - Only show for non-system forms that have actual files */}
                {selectedDoc.documentId?.fileUrl && 
                 !selectedDoc.documentId.fileUrl.startsWith('/forms/') && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Original Document (View & Fill)</h4>
                    <div className="border rounded-lg overflow-hidden bg-gray-100" style={{ height: '400px' }}>
                      <iframe
                        src={getDocumentUrl(selectedDoc.documentId.fileUrl)}
                        className="w-full h-full"
                        title="Document Preview"
                      />
                    </div>
                    <div className="mt-2 flex justify-end">
                      <a
                        href={getDocumentUrl(selectedDoc.documentId.fileUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:underline flex items-center"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Open in New Tab
                      </a>
                    </div>
                  </div>
                )}

                {/* System Form Notice */}
                {selectedDoc.documentId?.fileUrl?.startsWith('/forms/') && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-medium text-blue-800">System Onboarding Form</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          This is a standard onboarding form: <strong>{selectedDoc.documentId?.fileName}</strong>
                        </p>
                        <p className="text-xs text-blue-600 mt-2">
                          Please download the required form from your employer or HR department, fill it out, and upload the completed version below.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Upload Section */}
                <div className="border-t pt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Upload Completed Document</h4>
                  <p className="text-xs text-gray-500 mb-4">
                    Download the document above, fill it out, and upload the completed version below.
                  </p>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    
                    {selectedFile ? (
                      <div className="flex items-center justify-center space-x-4">
                        <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                          <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <button
                          onClick={() => setSelectedFile(null)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mt-2 text-sm text-gray-600">
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="text-green-600 hover:text-green-700 font-medium"
                          >
                            Click to upload
                          </button>{" "}
                          or drag and drop
                        </p>
                        <p className="mt-1 text-xs text-gray-500">PDF, DOC, DOCX, JPG, PNG (max 50MB)</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end px-6 py-4 border-t border-gray-200 bg-gray-50 space-x-3">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploadLoading}
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {uploadLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Submit Document
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDocuments;
