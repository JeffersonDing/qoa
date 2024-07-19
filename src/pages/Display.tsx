import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { auth, provider } from "../lib/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

import {
  chcekUserAdmin,
  expireCode,
  createEvent,
} from "@/lib/firebase/firestore";

const Display = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [otp, setOtp] = useState("");
  const [date, setDate] = React.useState<Date>();
  const [type, setType] = React.useState<string>();
  const [eventName, setEventName] = React.useState<string>("");

  const handleStart = async () => {
    const dateStr = date ? format(date, "yyyy-MM-dd") : "";
    const event = `${dateStr}_${type}`;
    setEventName(event);
    if (eventName === "") {
      return;
    }
    const code = await expireCode(otp, eventName);
    // create event in firestore
    createEvent(eventName);
    setOtp(code);
  };

  const refreshCode = async () => {
    if (eventName === "") {
      return;
    }
    const code = await expireCode(otp, eventName);
    setOtp(code);
  };

  // refresh code every 10 seconds until stop has been clicked
  useEffect(() => {
    if (otp) {
      const interval = setInterval(() => {
        refreshCode();
      }, 5000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  const handleStop = () => {
    if (eventName === "") {
      return;
    }
    expireCode(otp, eventName);
    setOtp("");
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      chcekUserAdmin(result.user.uid).then((isAdmin) => {
        setIsAdmin(isAdmin);
        setIsAuth(true);
      });
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  if (!isAuth) {
    return (
      <div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
        <Button className="bg-green-600" onClick={() => handleLogin()}>
          Login to Access Attendance
        </Button>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-red-600">
          Sorry! You do not have access.
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-center my-3">
        <div className="mx-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[180px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="mx-3">
          <Select value={type} onValueChange={(value) => setType(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Lecture Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="B">Business</SelectItem>
              <SelectItem value="E">Engineering</SelectItem>
              <SelectItem value="O">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {otp ? (
        <>
          <div className="text-6xl font-bold tracking-widest mt-5">
            {otp.split("").map((digit, index) => (
              <span key={index} className="mx-2">
                {digit}
                {index === 2 && <span className="mx-2"></span>}
              </span>
            ))}
          </div>
          <Button className="bg-red-600 mt-5" onClick={handleStop}>
            Stop Recording
          </Button>
        </>
      ) : (
        <Button className="bg-green-600" onClick={handleStart}>
          Start Attendance
        </Button>
      )}
    </div>
  );
};

export default Display;
