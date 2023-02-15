export interface H1Props extends React.ComponentPropsWithoutRef<"h1"> {}

export function H1(props: H1Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}

export interface H2Props extends React.ComponentPropsWithoutRef<"h2"> {}

export function H2(props: H2Props) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
      {props.children}
    </h2>
  );
}

export interface H3Props extends React.ComponentPropsWithoutRef<"h3"> {}

export function H3(props: H3Props) {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
}

export interface H4Props extends React.ComponentPropsWithoutRef<"h4"> {}

export function H4(props: H4Props) {
  return (
    <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}
