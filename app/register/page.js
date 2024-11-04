import './main.css'

export default function Register() {
    return (
      <div className="register-page">
        <h3>회원가입</h3>
          <form method="POST" action="/api/auth/signup">
            <input className='sign-input' name="name" type="text" placeholder="닉네임" /> 
            <input className='sign-input' name="email" type="text" placeholder="이메일" />
            <input className='sign-input' name="password" type="password" placeholder="패스워드" />
            <button type="submit">가입요청</button>
          </form>
      </div>
    )
  }