
/**
 * Helper to get localized content from an object based on the current locale.
 * 
 * @param {Object} item - The data object containing localized fields (e.g., title, title_ar, title_ru).
 * @param {string} field - The base field name (e.g., 'title').
 * @param {string} locale - The current locale code (e.g., 'en', 'ar', 'ru').
 * @returns {string} - The localized content or the default content if localized version is missing.
 */
export const getLocalizedContent = (item, field, locale) => {
    if (!item) return '';

    // If locale is english or not specified, return the default field
    if (!locale || locale === 'en') {
        return item[field] || '';
    }

    // Check for localized field, e.g., title_ar
    const localizedField = `${field}_${locale}`;
    if (item[localizedField]) {
        return item[localizedField];
    }

    // Fallback to default field
    return item[field] || '';
};
