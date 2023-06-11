import AuthForm from "@/components/auth-form";

export default function Home() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className="login-container">
        <h1 className="header">Supabase Auth + Storage</h1>
        <div className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}