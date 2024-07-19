import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import { auth, provider } from "../lib/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { UserCredential } from "firebase/auth";

import { addStudentToEvent, checkCurrentCode } from "../lib/firebase/firestore";
import { parseEventCode, checkPennEmail } from "@/lib/utils";

function App() {
  const [otp, setOtp] = useState("");
  const [warning, setWarning] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [authData, setAuthData] = useState<UserCredential | null>(null);
  const [title, setTitle] = useState<string>("");
  const [eventId, setEventId] = useState<string>("");

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result?.user.email && !checkPennEmail(result?.user.email)) {
        throw new Error("Invalid email");
      }
      setAuthData(result);
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  const handleClick = async () => {
    if (!otp) {
      setWarning("Please enter OTP");
      return;
    }
    //validate OTP
    const result = await checkCurrentCode(otp);
    if (!result.validate) {
      setWarning("Invalid OTP");
      return;
    }
    if (!authData) {
      try {
        await handleLogin();
      } catch (error) {
        console.log("Error during login", error);
        setWarning("Please use your Penn email to login");
        return;
      }
    }
    if (!authData?.user.email || !checkPennEmail(authData?.user.email)) {
      setWarning("Please use your Penn email to login");
      return;
    }

    setTitle(parseEventCode(result.event));
    setEventId(result.event);
    setWarning("");
    setIsAlert(true);
  };

  const handleConfirm = async () => {
    if (!eventId || !authData) {
      console.log("Returned:" + eventId + " " + authData);
      return;
    }
    await addStudentToEvent(eventId, authData.user.displayName);
    setIsAlert(false);
    setOtp("");
    setWarning("Success!");
  };

  return (
    // a div of the entire page with tailwind
    <div className="bg-white h-screen w-screen flex flex-col justify-center items-center p-5">
      <div className="flex flex-col justify-center items-center p-5">
        <div className="text-3xl font-bold text-center">QOA</div>
        <div className="mt-5">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => {
              setOtp(value);
            }}
            onComplete={handleClick}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="mt-5 m-10">
          <AlertDialog open={isAlert}>
            {/*use tailwind to make this trigger loke like a button*/}
            <AlertDialogTrigger
              className="bg-black text-white px-5 py-2 rounded text-center"
              onClick={handleClick}
            >
              Submit
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription className="flex justify-between">
                  <div className="p-5 flex items-center">
                    <Avatar className="mr-4">
                      <AvatarImage src={authData?.user.photoURL} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">
                        {authData?.user.displayName}
                      </h3>
                      <p className="text-sm">{authData?.user.email}</p>
                    </div>
                  </div>
                  <div className="p-5 flex items-center">
                    <Button
                      className="bg-red-600"
                      onClick={() => {
                        setAuthData(null);
                        auth.signOut();
                        setIsAlert(false);
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setIsAlert(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-green-600"
                  onClick={handleConfirm}
                >
                  Confirm Attendance
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="mt-5">
          <p
            className={`${
              warning == "Success!" ? "text-green-500" : "text-red-500"
            } h-6 ${warning && warning != "Success!" ? "animate-shake" : ""}`}
            style={{ visibility: warning ? "visible" : "hidden" }}
          >
            {warning}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
