console.log("App") in root.tsx is logging/rendering twice (not sure if this is expected)

This only happens when the root has a component that calls NavLink. Removing NavLink makes the root render only once.