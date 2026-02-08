
# Implementation Plan - Complete Config Generator & Dynamic Data

The user has pointed out that the current Config Generator is missing fields and wants to ensure the website uses dynamic data from `config.json` instead of hardcoded strings.

## 1. Goal
1.  **Complete Config Generator**: Add forms for all missing sections in `config.json` (`Timeline`, `LoveStory`, `DressCode`, `Gallery`, `Guestbook`).
2.  **Audit & Refactor Website**: Ensure all text in the website comes from `config.json`.

## 2. Missing Config Forms
We need to create the following components in `app/tool/generator/components`:
-   `TimelineForm.tsx`: Managing the schedule (Time, Title, Icon).
-   `LoveStoryForm.tsx`: Managing the love story (Date, Title, Desc, Image).
-   `DressCodeForm.tsx`: Managing dress code (Desc, Note, Palette colors).
-   `GalleryForm.tsx`: Adding/Removing images (URLs).
-   `StoryQuotesForm.tsx` (Optional): Managing quotes.

## 3. Website Audit (Potential Hardcoded Areas)
I need to check these files for hardcoded text:
-   `app/components/HeroSection.tsx`: Check for "Save the Date", names, dates.
-   `app/components/Footer.tsx`: Check for "Thank you", copyright.
-   `app/components/RSVPForm.tsx`: Labels might be hardcoded (acceptable if standard), but ensure instructions are dynamic if needed.
-   `app/components/EnvelopeOpening.tsx`: Check for invitation text.

## 4. Work Breakdown

### Phase 1: generator Forms
1.  Create `TimelineForm.tsx`.
2.  Create `LoveStoryForm.tsx`.
3.  Create `DressCodeForm.tsx`.
4.  Create `GalleryForm.tsx`.
5.  Update `app/tool/generator/page.tsx` to include these new sections.

### Phase 2: Website Audit
1.  Read `HeroSection.tsx`, `Footer.tsx`, `LoveStory.tsx` to spot hardcoded strings.
2.  Refactor any found hardcoded strings to use `config.json` (via context or props).

## 5. Verification
- Open `/tool/generator`, fill in all new fields.
- Download `config.json`.
- Replace the project's `config.json` with the downloaded one.
- Verify the website reflects ALL the changes (including timelines, love stories, etc.).
