import React from 'react';
import PageLayout from './PageLayout';
import './PageLayout.css';

const HowHitchlyWorks = () => {
    return (
        <PageLayout
            title="How Hitchly Works – Your Step-by-Step Guide to Smart Carpooling"
            description="Learn how Hitchly connects daily commuters in Hyderabad. Post your route, find verified matches, book securely, and track your ride in real time."
        >
            <h2>Carpooling Made Simple for Daily Commuters</h2>
            <p>
                Hitchly is built around one simple idea: the roads would be less congested, commutes would
                be cheaper, and daily travel would be more enjoyable if people who are already going the
                same way could easily find each other and share the journey. Here's exactly how the platform
                makes that happen.
            </p>

            <h2>Step 1 — Enter Your Commute Route</h2>
            <p>
                Open the Hitchly app and enter your starting location and destination. The platform uses
                smart geolocation to understand your commute corridor and calculate the most efficient
                route. You can save your home, office, and frequent stops for quick access every morning.
            </p>
            <p>
                Drivers set their route and post available seats in their vehicle. Riders set their pickup
                preference and destination. Both can specify preferred departure times, recurring schedules
                (e.g., weekday mornings), and any personal preferences like music, AC, or conversation.
            </p>

            <h2>Step 2 — Find People Traveling in the Same Direction</h2>
            <p>
                Once your route is set, Hitchly's matching algorithm instantly surfaces verified commuters
                going in the same direction. Results are sorted by route similarity, time proximity, and
                user ratings — ensuring you always see the most relevant matches first.
            </p>
            <ul>
                <li>View driver profiles with verified IDs and community ratings</li>
                <li>See the exact pickup point and estimated travel time</li>
                <li>Filter by gender preference, vehicle type, or departure window</li>
                <li>Check the cost split before committing to a booking</li>
            </ul>
            <p>
                The algorithm prioritizes minimal detour — drivers won't be routed far out of their way,
                and riders won't have to walk far for pickup. It's ride sharing Hyderabad done intelligently.
            </p>

            <h2>Step 3 — Share the Ride and Split the Cost</h2>
            <p>
                Send a booking request to your chosen driver. Once accepted, you'll receive real-time
                GPS tracking so you can monitor the driver's approach and coordinate pickup seamlessly.
                The app sends push notifications as the driver gets close — no awkward phone calls needed.
            </p>
            <p>
                Cost splitting is built into the platform. The fare is calculated automatically based on
                distance and the number of passengers, ensuring everyone pays their fair share. No cash
                haggling, no ambiguity — just transparent, agreed-upon pricing for every trip.
            </p>

            <div className="page-highlight">
                "Three steps. That's all it takes to go from solo driver to smart carpooler with Hitchly."
            </div>

            <h2>Step 4 — Rate and Build Community Trust</h2>
            <p>
                After every trip, both drivers and riders rate each other on a five-star scale. These
                ratings are publicly visible and help maintain the quality and safety of the Hitchly
                community. High-rated users get priority matching and exclusive features as the platform grows.
            </p>
            <p>
                Over time, many Hitchly users form consistent carpool groups with the same co-passengers
                each day — building genuine workplace friendships while reducing commute costs and traffic
                together.
            </p>

            <h2>Safety Built Into Every Step</h2>
            <p>
                Safety is not an afterthought at Hitchly — it's baked into every layer of the product.
                All users undergo profile verification before their first ride. Real-time GPS tracking
                lets family members or friends monitor your journey. Emergency features are accessible
                throughout every trip. Verified profiles, community ratings, and transparent booking
                records create a safe, accountable environment for daily commute ride share in India.
            </p>

            <h2>When Does Hitchly Launch?</h2>
            <p>
                Hitchly is currently in beta testing with an official launch planned for Q2 2026, starting
                with Hyderabad. Join the beta waitlist now to get early access, help shape the product, and
                enjoy priority features when the app goes live. The future of office commute sharing
                starts here.
            </p>
        </PageLayout>
    );
};

export default HowHitchlyWorks;
