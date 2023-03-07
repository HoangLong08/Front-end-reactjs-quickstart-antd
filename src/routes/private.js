import LoginAdmin from '../pages/Auth/LoginAdmin'
import Dashboard from '../pages/Admin/Dashboard'

const privateRoutes = [
  { path: '/management/admin/login', component: LoginAdmin, layout: null },
  { path: '/management/admin/dashboard', component: Dashboard }
]

export { privateRoutes }
