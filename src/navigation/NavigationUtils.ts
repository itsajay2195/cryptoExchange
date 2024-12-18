import { createRef } from "react";

export const navigationRef: any = createRef();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}
