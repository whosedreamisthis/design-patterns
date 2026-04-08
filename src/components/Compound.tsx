import { TabsProvider } from './Tabs/TabsProvider';
import { Tab, TabPanel } from './Tabs/Tab';
import { Home, Settings, User } from 'lucide-react';

export function Compound() {
	return (
		<div className="p-8">
			<h2 className="text-xl font-bold mb-4">
				Compound Component Pattern
			</h2>

			<TabsProvider defaultValue="home">
				{/* The List Container */}
				<div className="flex gap-4 border-b border-gray-200 w-fit mx-auto">
					<Tab value="home">
						<div className="flex items-center gap-2">
							<Home size={18} />
							<span>Home</span>
						</div>
					</Tab>
					<Tab value="settings">
						<div className="flex items-center gap-2">
							<Settings size={18} />
							<span>Settings</span>
						</div>
					</Tab>
					<Tab value="profile">
						<div className="flex items-center gap-2">
							<User size={18} />
							<span>Profile</span>
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
