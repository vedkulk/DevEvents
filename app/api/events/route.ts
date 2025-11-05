import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req:NextRequest){
    try {
        await connectDB()
        const formData = await req.formData()
        let event
        try {
            event = Object.fromEntries(formData.entries())
        } catch (error) {
            return NextResponse.json({message:"Invalid JSON data format"}, {status:400})
        }
        const createdEvent = await Event.create(event)
        return NextResponse.json({message:"Event created successfully", event:createdEvent}, {status:201})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message:"Event creation failed", error:e instanceof Error?e.message : "unknown"})
    }
}