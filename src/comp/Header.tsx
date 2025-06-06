"use client";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [{ id: "0", content: "Problematicas", href: "/" }];

export function Header(props: { resetQuestions: () => void }) {
  return (
    <header>
      <nav>
        <ul className="flex flex-sb px-10 py-2 border black b-y">
          <li>
            <h1 className="font-bold">SUIP</h1>
          </li>
          <li>
            <button onClick={props.resetQuestions}>
              <span className="mr-2 ">🏠</span>
              Inicio
            </button>
          </li>
          <li className="only-mobile">
            <Mobile />
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Mobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>SUIP</SheetTitle>
        </SheetHeader>
        <ul className="pt-8 flex flex-col gap-2">
          {LINKS.map((link) => (
            <li key={link.id}>{link.content}</li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
