import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";


const components: JSXMapSerializer={
  heading2: ({children}) =>(
    <Heading as="h2" size="sm" className="semi-bold text-center mb-4"
    > {children}</Heading>
    ),
    paragraph: ({children}) => (<p className=" text-center  text-slate-600" mb-8> {children}</p>)

}

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-grad-to-tr from-cyan-50 via-white to-emerald-50">

        <PrismicRichText field={slice.primary.heading}  components={components}/>
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link}>Link</Button>
        <>{slice.primary.button_text}</>
      </div>
      
      
    </Bounded>
  );
};

export default CallToAction;