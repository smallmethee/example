import { AppProps } from "next/app"
import Head from "next/head"
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core"
import { useHotkeys } from "@mantine/hooks"
import { useState } from "react"
import { getCookie, setCookie } from "cookies-next"
import { GetServerSidePropsContext } from "next"

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props

  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark")
    setColorScheme(nextColorScheme)
    // when color scheme is updated save it to cookie
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  useHotkeys([["mod+J", () => toggleColorScheme()]])

  return (
    <>
      <Head>
        <title>next with mantine</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
})
