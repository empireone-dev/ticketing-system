import { ClockIcon, DocumentTextIcon, FolderIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import ProjectDetailsTabContentSection from './project-details-tab-content-section';
import FileTabContentSection from './file-tab-content-section';
import ActivitiesTabContentSection from './activities-tab-content-section';
import ItPersonnelTabContentSection from './it-personnel-tab-content-section';

export default function TicketViewSection() {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className="flex items-center justify-between flex-1 space-y-4 py-3 px-3 rounded-t-lg bg-slate-500">
                <div className="mb-4 w-full relative">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                        <li className="me-2 flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${activeTab === 'profile' ? 'bg-white' : ''} w-full`} id="profile-tab" onClick={() => handleTabClick('profile')} type="button" role="tab" aria-controls="profile" aria-selected={activeTab === 'profile'}>
                                <DocumentTextIcon className='h-5 w-5 mr-1' /> Project Details
                            </button>
                            {activeTab === 'profile' && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li className="me-2 flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${activeTab === 'dashboard' ? 'bg-white' : ''} w-full`} id="dashboard-tab" onClick={() => handleTabClick('dashboard')} type="button" role="tab" aria-controls="dashboard" aria-selected={activeTab === 'dashboard'}>
                                <FolderIcon className='h-5 w-5 mr-1' /> Files
                            </button>
                            {activeTab === 'dashboard' && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li className="me-2 flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${activeTab === 'settings' ? 'bg-white' : ''} w-full`} id="settings-tab" onClick={() => handleTabClick('settings')} type="button" role="tab" aria-controls="settings" aria-selected={activeTab === 'settings'}>
                                <ClockIcon className='h-5 w-5 mr-1' /> Activities
                            </button>
                            {activeTab === 'settings' && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li className="flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:bg-white p-4 border-b-2 rounded-t-lg ${activeTab === 'contacts' ? 'bg-white' : ''} w-full`} id="contacts-tab" onClick={() => handleTabClick('contacts')} type="button" role="tab" aria-controls="contacts" aria-selected={activeTab === 'contacts'}>
                                <PencilSquareIcon className='h-5 w-5 mr-1' /> I.T Personnel Notes
                            </button>
                            {activeTab === 'contacts' && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div id="default-tab-content h-screen">
                <div className={`p-4 rounded-b-lg bg-gray-50 ${activeTab === 'profile' ? 'block' : 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <ProjectDetailsTabContentSection />
                </div>
                <div className={`p-4 rounded-b-lg bg-gray-50 ${activeTab === 'dashboard' ? 'block' : 'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <FileTabContentSection />
                </div>
                <div className={`p-4 rounded-b-lg bg-gray-50 ${activeTab === 'settings' ? 'block' : 'hidden'}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <ActivitiesTabContentSection />
                </div>
                <div className={`p-4 rounded-b-lg bg-gray-50 ${activeTab === 'contacts' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                    <ItPersonnelTabContentSection />
                </div>
            </div>
        </div>
    )
}
