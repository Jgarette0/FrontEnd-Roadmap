import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <Card className="flex flex-col w-full border-none">
        <Header />
        <img
          className="w-full mt-40 md:mt-2"
          src="/404.svg"
          alt="404 Not Found"
        />
      </Card>
    </>
  );
}
export default NotFoundPage;
