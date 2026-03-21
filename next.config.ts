import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ["next-mdx-remote"]
  /* config options here */
  // images:{
  //   remotePatterns:[
  //     {
  //       hostname: ""
  //     }
  //   ]
  // }
};

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   extension: /\.(md|mdx)$/,

// })


export default nextConfig
// export default withMDX(nextConfig)
