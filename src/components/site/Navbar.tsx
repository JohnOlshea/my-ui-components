// components/site/Navbar.tsx

import { SiYoutube, SiGithub } from "react-icons/si"

// A navbar component that will be used to house app-wide navigation and settings
export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white">
			<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							{/* Link and site name/icon */}
							<a
								className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
								href="/"
							>
								MyUILib
							</a>
						</div>
						<div className="flex flex-1 items-center justify-end">
							<nav className="flex items-center space-x-1">
								<a
									href="#"
									target="_blank"
									className="h-10 w-10 p-2 text-gray-800 hover:text-[#ff0000]" // Brand color from https://brandcolors.net/b/youtube
								>
									<SiYoutube className="h-full w-full" />
								</a>
								<a
									href="https://www.github.com/JohnOlshea"
									target="_blank"
									className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]" // Brand color from https://brandcolors.net/b/github
								>
									<SiGithub className="h-full w-full" />
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
