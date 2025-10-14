// DrawerFilter.tsx
"use client";
import * as React from "react";
import Filter from "@/components/filter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

export function DrawerFilter() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true; // Du kan använda useMediaQuery här

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="border-purple-800 w-full justify-self-center hover:bg-purple-600"
            variant="outline"
          >
            Filter
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filtrera</DialogTitle>
            <DialogDescription>Vad är du intresserad av?</DialogDescription>
          </DialogHeader>
          <Filter />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Filtrera</DrawerTitle>
          <DrawerDescription>Vad är du intresserad av?</DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <Filter />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Stäng</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}