import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import instance from '~/apis'
import { TypeUser } from '~/types/user'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6)
})
const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TypeUser>({
    resolver: joiResolver(userSchema)
  })
  const onSubmit = (user: TypeUser) => {
    (async () => {
      const { data } = await instance.post('/login', user)
      console.log(data)
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken)
        window.confirm('Bạn có muốn vào admin') && navigate('/admin')
      }
    })()
  }

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg'>
        <form onSubmit={handleSubmit(onSubmit)} className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>Đăng nhập</h1>

          <div>
            <div className='relative'>
              <p className='text-left'>Nhập email</p>
              <input
                type='email'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='email...'
                id='email'
                {...register('email', { required: true })}
              />
              {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
            </div>
          </div>

          <div>
            <div className='relative'>
              <p className='text-left'>Nhập password</p>
              <input
                type='password'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='password...'
                id='password'
                {...register('password', { required: true, minLength: 6 })}
              />
            </div>
          </div>

          <button className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
