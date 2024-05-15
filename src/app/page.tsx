import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import Image from "next/image";

import { createClient } from "@/prismicio";
////import {components} from "@/slices";

export default async function  Page() {
  const client =createClient();
  const page=await client.getSingle("homepage");
  return <div className="text-red-500"> Homepage!</div>

  //return <SliceZone slices={page.data.slices} components={components} />;

}

export async function generateMetadata() : Promise<Metadata> {
  const client =createClient();
  const page=await client.getSingle("homepage");

  return {
    title:page.data.meta_title,
    description:page.data.meta_description,

  };
  
}







