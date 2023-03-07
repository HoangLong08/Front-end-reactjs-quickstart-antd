import HomePage from '../pages/Home'
import LoginUserPage from '../pages/Auth/LoginUser'
import RegisterUserPage from '../pages/Auth/RegisterUser'
import ForgotPasswordPage from '../pages/Auth/ForgotPassword'
import NotFound from 'pages/Error/NotFound'

const publicRoutes = [
  { path: '/', page: HomePage },
  { path: '/login', page: LoginUserPage, layout: null },
  { path: '/register', page: RegisterUserPage, layout: null },
  { path: '/forgot-password', page: ForgotPasswordPage, layout: null },
  { path: '*', page: NotFound },
  { path: '/404', page: NotFound }
]

export { publicRoutes }
