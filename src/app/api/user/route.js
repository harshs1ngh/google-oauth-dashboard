import connectToDb from "@/database";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDb();
    const { name, email } = await req.json();

    const newUser = await User.create({ name, email });

    if (newUser) {
      return NextResponse.json({
        success: true,
        message: "User Registered",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Fail to register the user, Please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
