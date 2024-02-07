//All
export const LinkStyle = {
  fontSize: "20px",
};
export const GridStyle = {
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fdbe33",
  },
  "& label.Mui-focused": {
    color: "#030f27",
    fontWeight: "bold",
    fontSize: "22px",
  },
};
export const BoxStyle = {
  display: "flex",
  justifyContent: "center",
};
export const FormStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
export const TextFieldStyle = {
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#fdbe33",
  },

  width: { xs: "80%", lg: "50%", xl: "30%" },
};

//BackWardBtn
export const ButtonStyle = {
  maxWidth: "160px",
  width: "100%",
  transition: ".5s",
  borderRadius: "2px",
  p: "15px 35px",
  color: " #fdbe33",
  fontSize: "16px",
  bgcolor: "#030f27",
  fontWeight: "700",
  fontFamily: "Lalezar",
  whiteSpace: "nowrap",
  "&:hover": {
    transition: "all .75s",
    bgcolor: "#fdbe33",
    color: "#030f27",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
  },
};
//BtnSignUp
export const BtnSignUpStyle = {
  width: { xs: "50%" },
  transition: ".8s",
  borderRadius: "2px",
  p: "15px 35px",
  color: "#030f27",
  fontSize: "16px",
  bgcolor: "#fdbe33",
  fontWeight: "700",
  whiteSpace: { xs: "wrap", sm: "nowrap" },
  fontFamily: "Lalezar",
  ml: { xs: 0, md: 8 },
  "&:hover": {
    transition: "all .75s",

    bgcolor: "#030f27",
    color: "#fdbe33",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
  },
};
//SignUp(VerifyCode)
export const SignUpVerifyCodeBoxStyle = { mr: { xs: 5, md: 0 } };

export const SignUpVerifyCodeBoxStyle2 = {
  my: 10,
  display: "flex",
  justifyContent: "center",
  mr: { xs: 0, md: 10 },
};
//SignUp(VerifyNumber)
export const SignUpVerifyNumberBoxStyle = {
  display: "felx",
  justifyContent: "center",
  my: 10,
};
//SignUpFinal
export const SignUpFinalGridStyle = {
  border: "2px solid #fdbe33",
  borderRadius: "20px 0 20px 0",
};
export const SignUpFinalGridStyleTwo = { ml: { xs: 0, md: 1 } };
export const SignUpFinalCardMediaStyle = {
  p: 2,
  border: "1px solid #fdbe33 ",
  borderRadius: "0 20px  0 20px ",
};
export const SignUpFinalTextfieldStyleTwo = {
  mb: 1,
  "& label.MuiFormLabel-root": {
    color: "#030f27",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  "& .MuiInputBase-input:before": {
    borderBottomColor: "#030f27",
  },
  "& input.MuiInputBase-input ": {
    bgcolor: "#fdbe33",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
};
//SignupForm
export const SignupFormBoxStyle1 = {
  "& .MuiTextField-root": {
    my: 1,
    display: "flex",
    width: "100%",
  },
  mt: 18,
  ml: 3,
  width: "31rem",
};
export const SignupFormBoxStyleTwo = {
  "& .select-root": {
    textAlign: "center",
    height: "40px",
    paddingTop: "10px",
    pl: 1,
  },
};
export const SignupFormBtnStyle = {
  width: "100%",
  marginTop: "15px",
  mb: 2,
  bgcolor: "#fdbe33",
  transition: "all ease 0.8s",
  "&:hover": {
    bgcolor: "#030F27",
  },
};
