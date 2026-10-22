import { NextResponse } from "next/server";

//Function GET
export async function GET() {
  try {
    console.log({success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200});
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 } // กำหนด HTTP Status Code ที่นี่
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}