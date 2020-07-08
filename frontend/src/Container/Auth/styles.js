import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 80%;
  padding: 24px;
  margin: 0 auto;

  border-radius: 4px;
  box-shadow: 0 0 10px #262b48;
  
  background: #1d1d1d;
  
  *{ 
    margin-bottom: 6px;
    :last-child{ margin: 0; }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  box-shadow: 0 0 4px #808080 inset;
  border-radius: 2px;
  width: 80%;
  
  background: white;
  
  :before{ 
    content: ${({ icon }) => `"${icon}"`};
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display: inline-block;
    padding: 0 6px;
    
    color: #1d1d1d;
  }
`;

export const Input = styled.input`
  padding: 6px;
  color: #1d1d1d;

  &[type="submit"]{
    cursor: pointer;
    color: white;

    :hover{ color: #bb86fc; }
  }
`;
