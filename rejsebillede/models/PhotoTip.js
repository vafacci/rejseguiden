class PhotoTip {
    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
    }

    // Method to get formatted tip
    getFormattedTip() {
        return `${this.title}: ${this.description}`;
    }
}

// Example usage:
// const tip = new PhotoTip(
//     "Gylne time",
//     "Tag billeder morgen/aften – lyset er blødere og mere flatterende.",
//     "Lighting"
// );

export default PhotoTip; 