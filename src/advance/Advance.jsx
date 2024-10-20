import { useFormik } from "formik"
import "./Advance.css"

export const Advance = () => {

  const formik = useFormik({
    initialValues : {
      firstName : '',
    }
  })
  return(
    <div className="form-group">
      <h1>New Sign up Form</h1>
      <div className="inputs">
        <form>
          <label htmlFor="firstname">First Name</label>
          <input type="text"  placeholder="Enter Name" />
        </form>
      </div>
    </div>
  )
}