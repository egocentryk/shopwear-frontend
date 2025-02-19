import { Button, Link, Stack, TextField } from "@mui/material"
import NextLink from "next/link"

export default function SignupPage() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email"></TextField>
      <TextField label="Password" variant="outlined" type="password"></TextField>
      <Button variant="contained">Sign Up</Button>
      <Link component={NextLink} href="/auth/login" className="self-center">Login</Link>
    </Stack>
  );
}
