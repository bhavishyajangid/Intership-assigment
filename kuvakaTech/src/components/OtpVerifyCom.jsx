import React from 'react'
import { useRef , memo } from 'react'
import Input from '../components/Input'
import { useOtpTimer } from '../hook/OtpTime'
import { useDispatch, useSelector } from 'react-redux'
import { setOtpVerify, setResend } from '../store/userSlice'
import { toast } from 'react-toastify'
const OtpVerifyCom = () => {
  const {generatedOtp} = useSelector(state => state.userSlice)
    const dispatch = useDispatch()
    const second = useOtpTimer()
    const userOtp = useRef(null)

      const handleResend = () => {
         dispatch(setResend())
         toast.success('Otp Resend Sucessfully')
      }

      console.log(generatedOtp);
      
    const verifyOtp = () => {

       if(userOtp.current.value == '') return
       
       if(second == 0) return toast.error('Otp Expire Resend it ')
       if(parseInt(userOtp.current.value) == parseInt(generatedOtp)){
        dispatch(setOtpVerify(true))
        toast.success('Otp Verified')
         
       }else{
        toast.error('Invalid Otp')
       }
    }
    
  return (

    <div>
            <Input
             ref={userOtp}
             placeholder={"Enter Otp"}
             maxLength="6"
              />
             <div className="flex justify-between items-center px-4 py-1">
          {second !== 0 ? (
            <p className="text-xs text-gray-700 ">
              {second > 0 ? `Otp valid till ${second}s` : "Didn’t receive OTP?"}
          </p>
          ) : (
            <button
              type="button"
              onClick={() => {handleResend()}}
              className="text-sm text-orange-400"
            >
              Resend
            </button>
          )}

           <button
            type="button"
            onClick={() => {verifyOtp()}}
            className="text-sm text-orange-400"
          >
            Submit
          </button>
            </div> 
          </div>
  )
}

export default memo(OtpVerifyCom) 