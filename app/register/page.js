import './main.css'

export default function Register() {
    return (
      <div className="register-page">
        <h3>회원가입</h3>
          <form method="POST" action="/api/auth/signup">
            <table>
              <tbody>
                <tr>
                  <th>닉네임</th>
                  <td>
                    <input id='nick-input' name="name" type="text"/>
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td className='tdtd'>
                    <input name="id" type="text"/>
                    <p className='reg-warning'>영문 또는 숫자를 포함한 6-20자</p>
                  </td>
                </tr>
                <tr>
                  <th>패스워드</th>
                  <td>
                    <input name="password" type="password"/>
                    <p className='reg-warning'>8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합</p>
                  </td>
                </tr> 
              </tbody>
            </table>
            <button type="submit">가입요청</button>
          </form>
      </div>
    )
  }