import Button from "./components/library/Button"
import { BlockLinkCard, ContentCard } from "./components/library/Card"
import { Input } from "./components/library/Input"
import { Container } from "./components/site/Container"
import Layout from "./components/site/Layout"
import { Section } from "./components/site/Section"

export default function App() {
	return (
		<Layout>
			<Container
				title="Button"
				description="A button - Lets the user trigger an action or event"
			>
				<Section
					title="Primary"
					description="Primary actions - Solid and high contrast"
				>
					{/* Primary button */}
					<Button>Default Primary</Button>
					{/* Disabled primary button */}
					<Button disabled>Disabled Primary</Button>
					{/* Primary color overide buttons */}
					<Button
						colors={{
							bg: "bg-amber-500",
							hoverBg: "hover:bg-amber-600",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber Primary
					</Button>
					<Button
						colors={{
							bg: "bg-rose-500",
							hoverBg: "hover:bg-rose-600",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						colors={{
							bg: "bg-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-600",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						colors={{
							bg: "bg-indigo-500",
							hoverBg: "hover:bg-indigo-600",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						colors={{
							bg: "bg-[#1da1f2]",
							hoverBg: "hover:bg-[#1a8cd8]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>

				<Section
					title="Secondary"
					description="Secondary actions - Clear not prominent"
				>
					<Button variant="secondary">Default Secondary</Button>
					<Button variant="secondary" disabled>
						Disabled Secondary
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-amber-500",
							hoverBorder: "hover:border-amber-500",
							hoverBg: "hover:bg-amber-500",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber Secondary
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-rose-500",
							hoverBorder: "hover:border-rose-500",
							hoverBg: "hover:bg-rose-500",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-fuchsia-500",
							hoverBorder: "hover:border-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-500",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-indigo-500",
							hoverBorder: "hover:border-indigo-500",
							hoverBg: "hover:bg-indigo-500",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-[#1da1f2]",
							hoverBorder: "hover:border-[#1da1f2]",
							hoverBg: "hover:bg-[#1da1f2]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>

				<Section title="Tertiary" description="Tertiary actions - discoverable">
					<Button variant="tertiary">Default Tertiary</Button>
					<Button variant="tertiary" disabled>
						Disabled Tertiary
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-amber-500",
							hoverText: "hover:text-amber-700",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber Tertiary
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-rose-500",
							hoverText: "hover:text-rose-700",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-fuchsia-500",
							hoverText: "hover:text-fuchsia-700",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-indigo-500",
							hoverText: "hover:text-indigo-700",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-[#1da1f2]",
							hoverText: "hover:text-[#1a8cd8]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>

				<Section
					title="Destructive"
					description="Destructive actions - normally result in item removal"
				>
					{/* Destructive primary button */}
					<Button
						colors={{
							bg: "bg-red-500",
							hoverBg: "hover:bg-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Yep, I want to delete this
					</Button>
					{/* Destructive secondary button */}
					<Button
						variant="secondary"
						colors={{
							text: "text-red-500",
							hoverBorder: "hover:border-red-500",
							hoverBg: "hover:bg-red-500",
							focusRing: "focus:ring-red-500",
						}}
					>
						Unsubscribe
					</Button>
					{/* Destructive tertiary button */}
					<Button
						variant="tertiary"
						colors={{
							text: "text-indigo-500",
							hoverText: "hover:text-indigo-700",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Cancel
					</Button>
				</Section>
			</Container>

			<Container
				title="Card"
				description="A card is a flexible content container"
			>
				<Section title="Simple" description="Simple card">
					{/* Simple card */}
					<ContentCard
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card"
						link={{
							url: "#",
							text: "Card link",
						}}
					></ContentCard>
				</Section>

				<Section
					title="Simple with a header and footer"
					description="Add an optional header"
				>
					{/* Simple card with header */}
					<ContentCard
						header="Featured"
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card"
						link={{
							url: "#",
							text: "Card link",
						}}
					></ContentCard>
					{/* Simple card with footer */}
					<ContentCard
						footer="Last updated 10 mins ago"
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card"
						link={{
							url: "#",
							text: "Card link",
						}}
					></ContentCard>
				</Section>

				<Section title="Block link" description="Simple card">
					{/* Vite card */}
					<BlockLinkCard url="https://vitejs.dev/" text="vite">
						{/* <SiVite className="h-10 w-10" /> */}
						<span>V</span>
					</BlockLinkCard>

					{/* Nextjs card */}
					<BlockLinkCard url="https://vitejs.org/" text="Next.js">
						{/* <SiVite className="h-10 w-10" /> */}
						<span>N</span>
					</BlockLinkCard>
				</Section>
			</Container>

			<Container
				title="Inputs"
				description="An input is a widget that allows users to provide data"
			>
				<Section title="Basic" description="Basic input with a placeholder.">
					{/* Basic Input */}
					<Input type="text" placeholder="Type things here" />

					{/* Basic Disabled Input */}
					<Input disabled type="text" placeholder="Disabled :(" />
				</Section>

				<Section title="Label" description="Input with a label.">
					{/* Input with a label */}
					<Input type="email" label="Email" placeholder="you@site.com" />
				</Section>

				<Section title="Description" description="Input with a description.">
					{/* Input with a description */}
					<Input type="password" label="Password" placeholder="secret!" description="Your secret is safe with us ;)"/>
				</Section>
			</Container>
		</Layout>
	)
}
