import React from "react";

export default function Layout({children}) {

  return (
    <>
      <main className="mx-auto h-full min-h-screen items-center my-20 flex flex-col">
        {children}
      </main>
    </>
  )

}