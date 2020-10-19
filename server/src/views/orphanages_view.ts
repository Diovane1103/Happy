import Orphanage from "../models/Orphanage";
import imageView from "./images_view";

export default {
  render(orphanage: Orphanage) {
    const {
      id,
      about,
      name,
      instructions,
      open_on_weekends,
      opening_hours,
      latitude,
      longitude,
      images,
    } = orphanage;
    return {
      id,
      name,
      about,
      instructions,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends,
      images: imageView.renderMany(images),
    };
  },
  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
