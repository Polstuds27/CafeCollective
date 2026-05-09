export function getSocialLinks(social_media: {
  twitter?: string;
  instagram?: string;
  facebook_id?: string;
}) {
  return {
    twitter: social_media.twitter
      ? `https://twitter.com/${social_media.twitter}`
      : null,
    instagram: social_media.instagram
      ? `https://instagram.com/${social_media.instagram}`
      : null,
    facebook: social_media.facebook_id
      ? `https://facebook.com/${social_media.facebook_id}`
      : null,
  };
}