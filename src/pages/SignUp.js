import styled from 'styled-components'

const SignUpPageStyled = styled.div`
  min-height: 100vh;
  padding: 40px;

  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }

  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }

  .label {
    color: ${(props) => props.theme.grayDark};
    font-weight: 500;
    cursor: pointer;
  }

  .input {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    border: 1px solid transparent;
    &:focus {
      background-color: #ffffff;
      border-color: ${(props) => props.theme.primary};
    }
  }

  .form {
    max-width: 900px;
    margin: 0 auto;
  }
`

export default function SignUp() {
  return (
    <SignUpPageStyled>
      <div className='container'>
        <img
          srcSet='/logo.png 2x'
          alt='monkey-blogging-logo'
          className='logo'
        />
        <h1 className='heading'>Monkey Blogging</h1>

        <form>
          <div className='field'>
            <label htmlFor='fullname' className='label'>
              Fullname
            </label>

            <input
              id='fullname'
              type='text'
              className='input'
              placeholder='Enter your fullname'
            />
          </div>
        </form>
      </div>
    </SignUpPageStyled>
  )
}