import React from "react";
import { cn } from "@/lib/utils";

interface H1Props extends React.ComponentPropsWithRef<"h1"> {}

export const TypographyH1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  (props, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          props.className
        )}
      />
    );
  }
);

interface H2Props extends React.ComponentPropsWithRef<"h2"> {}

export const TypographyH2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  (props, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn(
          "mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700",
          props.className
        )}
      />
    );
  }
);

interface H3Props extends React.ComponentPropsWithRef<"h3"> {}

export const TypographyH3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  (props, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
          props.className
        )}
      />
    );
  }
);

interface H4Props extends React.ComponentPropsWithRef<"h4"> {}

export const TypographyH4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  (props, ref) => {
    return (
      <h4
        ref={ref}
        {...props}
        className={cn(
          "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          props.className
        )}
      />
    );
  }
);

interface PProps extends React.ComponentPropsWithRef<"p"> {}

export const TypographyP = React.forwardRef<HTMLParagraphElement, PProps>(
  (props, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
      />
    );
  }
);

interface BlockquoteProps extends React.ComponentPropsWithRef<"blockquote"> {}

export const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  BlockquoteProps
>((props, ref) => {
  return (
    <blockquote
      ref={ref}
      {...props}
      className={cn(
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200",
        props.className
      )}
    />
  );
});

interface ListProps extends React.ComponentPropsWithRef<"ul"> {}

export const TypographyList = React.forwardRef<HTMLUListElement, ListProps>(
  (props, ref) => {
    return (
      <ul
        ref={ref}
        {...props}
        className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}
      />
    );
  }
);

interface InlineCodeProps extends React.ComponentPropsWithRef<"code"> {}

export const TypographyInlineCode = React.forwardRef<
  HTMLHtmlElement,
  InlineCodeProps
>((props, ref) => {
  return (
    <code
      ref={ref}
      {...props}
      className={cn(
        "relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400",
        props.className
      )}
    />
  );
});

export const TypographyLead = React.forwardRef<HTMLParagraphElement, PProps>(
  (props, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(
          "text-xl text-slate-700 dark:text-slate-400",
          props.className
        )}
      />
    );
  }
);

interface DivProps extends React.ComponentPropsWithRef<"div"> {}

export const TypographyLarge = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "text-lg font-semibold text-slate-900 dark:text-slate-50",
          props.className
        )}
      />
    );
  }
);

interface SmallProps extends React.ComponentPropsWithRef<"small"> {}

export const TypographySmall = React.forwardRef<HTMLElement, SmallProps>(
  (props, ref) => {
    return (
      <small
        ref={ref}
        {...props}
        className={cn("text-sm font-medium leading-none", props.className)}
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
        className={cn(
          "text-sm text-slate-500 dark:text-slate-400",
          props.className
        )}
      />
    );
  }
);

interface AnchorProps extends React.ComponentPropsWithRef<"a"> {}

export const TypographyLink = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  (props, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          "font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50",
          props.className
        )}
      />
    );
  }
);
