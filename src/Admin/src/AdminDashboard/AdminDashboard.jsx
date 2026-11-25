import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import AdminContext from './AdminContext'

const AdminDashboard = () => {
    return (
        <AdminContext>
            <div className='flex'>
                <SidebarAdmin />
            </div>

        </AdminContext>
    )
}

export default AdminDashboard