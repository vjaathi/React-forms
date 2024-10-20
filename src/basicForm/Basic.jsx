import { useFormik} from "formik"
import "./Basic.css"
import { BasicSchema } from "../Validation"


const onSubmit = async (values,actions) =>{
  console.log(values)
  console.log(actions)
  try {
    await new Promise( (resolve) => setTimeout(resolve,1000) )
  actions.resetForm()
  } catch (error) {
    console.log(error,"wrong");
    
  }
  
}
export const Basic = () => {

  const {values, touched, isSubmitting, handleBlur,handleChange,errors,handleSubmit} = useFormik({
    initialValues : {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      cpassword : '',
      dob : '',
      gender : '',
      terms : false
    },
    validationSchema : BasicSchema,
    onSubmit
  })

  console.log(touched);
  
  return(
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" 
          name="firstName"
          className={errors.firstName && touched.firstName ? "error" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          placeholder="Enter first Name" />
          {errors.firstName && touched.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" 
          name="lastName"
          className={errors.lastName && touched.lastName ? "error" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          placeholder="Enter last Name" />
          {errors.lastName && touched.lastName && <p className="error-message"> {errors.lastName} </p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" 
          name="email"
          className={errors.email && touched.email ? "error" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="Enter Email" />
          {errors.email && touched.email && <p className="error-message">  {errors.email} </p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" 
          name="password"
          className={errors.password && touched.password ? "error" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="Enter Password" />
          {errors.password && touched.password && <p className="error-message">  {errors.password} </p>}

        </div>

        <div className="form-group">
          <label htmlFor="cpassword">Confrim Password</label>
          <input type="password" 
          name="cpassword"
          className={errors.cpassword && touched.cpassword ? "error" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cpassword}
          placeholder="Enter Correct password" />
          {errors.cpassword && touched.cpassword && <p className="error-message">  {errors.cpassword} </p>}

        </div>

        <div className="form-group">
          <label htmlFor="dob">D/O/B</label>
          <input type="date" 
          name="dob"
          className={errors.dob && touched.dob ? "error" : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.dob}
          placeholder="Enter D/O/B" />
          {errors.dob && touched.dob && <p className="error-message">  {errors.dob} </p>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            className={errors.gender && touched.gender ? 'error' : ''}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && touched.gender ? (
            <p className="error-message">{errors.gender}</p>
          ) : null}
        </div>

        <div className="form-group"> 
          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className={errors.terms && touched.terms ? "error" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.terms}
              
            />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          {touched.terms && errors.terms ? (
            <p className="error-message">{errors.terms}</p>
          ) : null}
        </div>

        <input className="subBtn" disabled={isSubmitting} type="submit" value="submit" style={{fontWeight:800, fontSize:15}} />
      </form>
    </div>
  )
}