import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TechIcons } from "./TechIcons";

export function Technologies() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Technologies</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col place-items-center mx-auto w-full max-w-md">
          <DrawerHeader className="flex flex-col place-items-center">
            <DrawerTitle>Tools & Tech used</DrawerTitle>
            <DrawerDescription>Vite, React, Tailwind...</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col place-items-center gap-4">
            <TechIcons />
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="w-64" variant="outline">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default Technologies;
