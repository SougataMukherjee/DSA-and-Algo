function formatBreadcrumbItems(items, maxCharCount) {
  if (items.length <= 1) return items;
  const totalItems = items.length;
  let charCount = 0;
  let lastVisibleIndex = totalItems - 1;
  const lastItem = items[totalItems - 1];
  // Traverse from the last item to the second one.
  for (let i = totalItems - 1; i >= 1; i--) {
    charCount += items[i].name.length;
    if (charCount > maxCharCount) {
      lastVisibleIndex = i + 1;
      break;
    }
  }
  const formattedItems = [];
  // Push the first item (Home) as-is.
  formattedItems.push(items[0]);
  if (charCount <= maxCharCount) {
    // Push all remaining items directly if within character limit.
    formattedItems.push(...items.slice(1));
  } else {
    // If character count exceeds maxCharCount, handle hidden items.
    if (lastItem.name.length > maxCharCount) {
      formattedItems.push({
        type: "hide",
        items: items.slice(1, lastVisibleIndex - 1).map((item) => ({
          ...item,
          name:
            item.name.length > 5 ? `${item.name.slice(0, 5)}...` : item.name,
        })),
      });
    } else {
      formattedItems.push({
        type: "hide",
        items: items.slice(1, lastVisibleIndex).map((item) => ({
          ...item,
          name:
            item.name.length > 5 ? `${item.name.slice(0, 5)}...` : item.name,
        })),
      });
    }
    // Handle truncation for the last visible item if needed.
    if (items[totalItems - 1].name.length > maxCharCount) {
      formattedItems.push({
        ...items[totalItems - 1],
        name: items[totalItems - 1].name.substring(0, maxCharCount) + "...",
      });
    } else {
      // No truncation needed for the last item.
      formattedItems.push(...items.slice(lastVisibleIndex));
    }
  }
  return formattedItems;
}
const items = [
  { name: "Home", path: "/", iconText: "both", iconName: "home_icon" },
  {
    name: "Test Development",
    path: "/test_dev",
    iconText: "text",
    iconName: "home_icon",
  },
];
// const items = [
// { name: "Home", path: "/", iconText: "both", iconName: "home_icon" },
// { name: "Test Development", path: "/test_dev", iconText: "text", iconName: "home_icon" },
// { name: "Plugin", path: "/plugin", iconText: "text", iconName: "home_icon" },
// { name: "Configurationssssssssssssssss", path: "/config", iconText: "text", iconName: "home_icon" }
// ];
// const items = [
// { name: "Home", path: "/", iconText: "both", iconName: "home_icon" },
// { name: "Test Developmentsssssssssssssssssssssssssssssss", path: "/test_dev", iconText: "text", iconName: "home_icon" },
// ];
// const items = [
// { name: "Home", path: "/", iconText: "both", iconName: "home_icon" },
// { name: "Test Devbgygyjgjgj", path: "/test_dev", iconText: "text", iconName: "home_icon" },
// { name: "Plugin", path: "/plugin", iconText: "text", iconName: "home_icon" },
// { name: "Configghghghvvhjhjhfghfghfghghghg", path: "/config", iconText: "text", iconName: "home_icon" }
// ];
const maxCharCount = 20;
const formattedItems = formatBreadcrumbItems(items, maxCharCount);
console.log("Formatted Items:", formattedItems);
