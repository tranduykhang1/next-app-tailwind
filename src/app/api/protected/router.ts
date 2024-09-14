import { auth } from "@/config/auth";
import { NextRequestWithAuth } from "next-auth/middleware";

export const GET = auth((req: NextRequestWithAuth) => {
    if (req.nextauth) {
        return Response.json({ data: "Protected data" });
    }

    return Response.json({ message: "Not authenticated" }, { status: 401 });
}) as any;
