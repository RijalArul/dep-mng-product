import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact'
import { NavLink } from 'react-router-dom'
import { GrTransaction } from 'react-icons/gr'

export default function Root () {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor='#fff' backgroundColor='#333'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
          <a
            href='/'
            className='text-decoration-none'
            style={{ color: 'inherit' }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/profile' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='user'>Profile</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/transaction' activeClassName='activeClicked'>
              <CDBSidebarMenuItem>
                <GrTransaction className='white' />
                Transaction
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px'
            }}
          >
            Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

// export default function Root () {
//   return (
//     <>
//       <div id='sidebar'>
//         <h1>React Router Contacts</h1>
//         <div></div>
//         <nav>
//           <ul>
//             <li>
//               <a href={`/contacts/1`}>Categories</a>
//             </li>
//             <li>
//               <a href={`/contacts/2`}>Transactions</a>
//             </li>
//             <li>
//               <a href={`/contacts/2`}>Products</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div id='detail'></div>
//     </>
//   )
// }
