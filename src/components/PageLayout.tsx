import Head from "next/head";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({ children }: Props) {
  return <div className=" bg-[#FEFEFE] -z-20">{children}</div>;
}
