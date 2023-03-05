import React from "react";

export interface H1Props extends React.ComponentPropsWithRef<"h1"> {}

export const TypographyH1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  (props, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      />
    );
  }
);

export interface H2Props extends React.ComponentPropsWithRef<"h2"> {}

export const TypographyH2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  (props, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700"
      />
    );
  }
);

export interface H3Props extends React.ComponentPropsWithRef<"h3"> {}

export const TypographyH3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  (props, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      />
    );
  }
);

export interface H4Props extends React.ComponentPropsWithRef<"h4"> {}

export const TypographyH4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  (props, ref) => {
    return (
      <h4
        ref={ref}
        {...props}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      />
    );
  }
);

export interface PProps extends React.ComponentPropsWithRef<"p"> {}

export const TypographyP = React.forwardRef<HTMLParagraphElement, PProps>(
  (props, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className="leading-7 [&:not(:first-child)]:mt-6"
      />
    );
  }
);

export interface BlockquoteProps
  extends React.ComponentPropsWithRef<"blockquote"> {}

export const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  BlockquoteProps
>((props, ref) => {
  return (
    <blockquote
      ref={ref}
      {...props}
      className="mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200"
    />
  );
});

export interface ListProps extends React.ComponentPropsWithRef<"ul"> {}

export const TypographyList = React.forwardRef<HTMLUListElement, ListProps>(
  (props, ref) => {
    return (
      <ul ref={ref} {...props} className="my-6 ml-6 list-disc [&>li]:mt-2" />
    );
  }
);

export interface InlineCodeProps extends React.ComponentPropsWithRef<"code"> {}

export const TypographyInlineCode = React.forwardRef<
  HTMLHtmlElement,
  ListProps
>((props, ref) => {
  return (
    <code
      ref={ref}
      {...props}
      className="relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400"
    />
  );
});

export const TypographyLead = React.forwardRef<HTMLParagraphElement, PProps>(
  (props, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className="text-xl text-slate-700 dark:text-slate-400"
      />
    );
  }
);

export interface DivProps extends React.ComponentPropsWithRef<"div"> {}

export const TypographyLarge = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="text-lg font-semibold text-slate-900 dark:text-slate-50"
      />
    );
  }
);

export interface SmallProps extends React.ComponentPropsWithRef<"small"> {}

export const TypographySmall = React.forwardRef<HTMLElement, SmallProps>(
  (props, ref) => {
    return (
      <small
        ref={ref}
        {...props}
        className="text-sm font-medium leading-none"
      />
    );
  }
);

export const TypographySubtle = React.forwardRef<HTMLParagraphElement, PProps>(
  (props, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className="text-sm text-slate-500 dark:text-slate-400"
      />
    );
  }
);

export interface AnchorProps extends React.ComponentPropsWithRef<"a"> {}

export const TypographyLink = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  (props, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50"
      />
    );
  }
);
