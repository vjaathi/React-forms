import {useForm} from "react-hook-form"
import "./MyRegister.css"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const schema = yup.object().shape( {
  firstName:yup.string().required("first Name required").min(3,"firstname at least 3 char").max(15,"upto 15 char"),
  lastName:yup.string().required("last Name required"),
  email:yup.string().email("Enter valid email").required("Enter email"),
  password:yup.string().required() .min(4,"at least 4 char required").max(15, "enough 15 char"),
  confrimPassword : yup.string().required().oneOf([yup.ref("password"),null]),
  dob:yup.date()
  .required('Required').max(new Date()),
  agreeToTerms: yup.boolean().oneOf([true], 'Must accept terms and conditions').required("plz check terms"),
})

const MyRegister = () =>{
  const {register, handleSubmit, formState : { errors,isValid,isDirty} } =  useForm( {
    resolver: yupResolver(schema),
    mode:"onBlur"
  });
  // console.log(isValid);

  return(
    <div className="inputs">
      <form className="register-form" onSubmit={handleSubmit( (data) => {
        console.log(data);
        
      })}>
        <h1 className="title">Sign Up</h1>

        <div className="form-group">
          <label >First Name
            <input {...register("firstName")}  type="text" placeholder="FirstName" />
          </label>
          <p className="error">{errors.firstName?.message}</p>
        </div>

        <div className="form-group">
          <label>Last Name
            <input {...register("lastName")} type="text" placeholder="LastName" />
          </label>
          <p className="error">{errors.lastName?.message}</p>
        </div>
        <div className="form-group">
          <label>Email
            <input {...register("email")} type="email" placeholder="Email" />
          </label>
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label>D/O/B
            <input {...register("dob")} type="date"  />
          </label>
          <p className="error">{errors.dob?.message}</p>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select name="gender" className="gender" id="gender">
            <option value="male">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Others</option>
          </select>
          {/* <p className="error">{errors.dob?.message}</p> */}
        </div>

        <div className="form-group">
          <label>Password
            <input {...register("password")} type="Password" placeholder="LastName" />
          </label>
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="form-group">
          <label>Confrim Password
            <input {...register("confrimPassword")} type="Password" placeholder="CPassword" />
          </label>
           <p className="error">{errors.confrimPassword?.message}</p>
        </div>
        <div className="form-check">
            <input {...register("agreeToTerms")} id="check" type="checkbox" />
          <label htmlFor="check">I agree Terms & Cnditions</label>
        </div>
          <p className="error error-check">{errors.agreeToTerms?.message}</p>
        <input type="submit" className="inputBtn" /> 
      </form>
    </div>
  )
}

export default MyRegister;
