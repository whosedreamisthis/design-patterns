import { TabsProvider } from './TabsProvider';
import { Tab, TabPanel } from './Tab';
import { Home, Settings, User } from 'lucide-react';

export function Compound() {
	return (
		<div className="p-2">
			<h2 className="text-xl font-bold mb-4 mx-auto w-full">
				Compound Component Pattern
			</h2>

			<TabsProvider defaultValue="home">
				{/* The List Container */}
				<div className="flex   border-b border-gray-200  pb-1 mx-auto">
					<Tab value="home">
						<div className="flex items-center gap-2 px-2 pb-2">
							<Home size={18} />
							<span className="whitespace-nowrap">Home</span>
						</div>
					</Tab>
					<Tab value="settings">
						<div className="flex items-center gap-2 px-2 pb-2">
							<Settings size={18} />
							<span className="whitespace-nowrap">Settings</span>
						</div>
					</Tab>
					<Tab value="profile">
						<div className="flex items-center gap-2 px-2 pb-2">
							<User size={18} />
							<span className="whitespace-nowrap">Profile</span>
						</div>
					</Tab>
				</div>

				{/* The Content Panels */}
				<div className="mt-4 text-center">
					<TabPanel value="home">
						🏠 Welcome to the Home screen.
					</TabPanel>
					<TabPanel value="settings">
						⚙️ Manage your account settings here.
					</TabPanel>
					<TabPanel value="profile">
						👤 View your user profile.
					</TabPanel>
				</div>
			</TabsProvider>
		</div>
	);
}
