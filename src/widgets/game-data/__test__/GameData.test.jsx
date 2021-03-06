import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import GameDataWidget from "../index";
import {
  PAGE_BOWLER_ALL,
  PAGE_EVENT_ALL,
  PAGE_BOWLER_SINGLE,
  PAGE_EVENT_SINGLE,
} from "../../../constants/page-view";

describe("Render Game Data Widget", () => {
  it("Render Game Data Widget with initial state / no data", () => {
    render(<GameDataWidget />);
    const gameDataWidget = screen.queryByTestId("game-data-widget");
    expect(gameDataWidget).toBeNull();
  });
  it("Render Game Data Widget data", () => {
    render(<GameDataWidget page={PAGE_BOWLER_ALL} data={[1, 2, 3]} />);
    const gameDataWidget = screen.queryByTestId("game-data-widget");
    expect(gameDataWidget).not.toBeNull();
    const gameTypeSections = screen.queryAllByTestId(
      "game-data-widget-section"
    );
    expect(gameTypeSections).toHaveLength(3);
    const gameTypeSectionsTitle = screen.queryAllByTestId(
      "game-data-widget-section-title"
    );
    expect(gameTypeSectionsTitle).toHaveLength(3);
    expect(gameTypeSectionsTitle[0]).toHaveTextContent("Baker");
    expect(gameTypeSectionsTitle[1]).toHaveTextContent("Team");
    expect(gameTypeSectionsTitle[2]).toHaveTextContent("Baker Match Play");
  });
  it("Render Game Data Widget data - individual bowler", () => {
    render(<GameDataWidget page={PAGE_BOWLER_SINGLE} data={[1, 2, 3]} />);
    const gameDataWidget = screen.queryByTestId("game-data-widget");
    expect(gameDataWidget).not.toBeNull();
    const gameTypeSections = screen.queryAllByTestId(
      "game-data-widget-section"
    );
    expect(gameTypeSections).toHaveLength(3);
    const gameTypeSectionsTitle = screen.queryAllByTestId(
      "game-data-widget-section-title"
    );
    expect(gameTypeSectionsTitle).toHaveLength(3);
    expect(gameTypeSectionsTitle[0]).toHaveTextContent("Baker");
    expect(gameTypeSectionsTitle[1]).toHaveTextContent("Team");
    expect(gameTypeSectionsTitle[2]).toHaveTextContent("Baker Match Play");
  });
  it("Render Game Data Widget data - All Event pages", () => {
    render(<GameDataWidget page={PAGE_EVENT_ALL} data={[1, 2, 3]} />);
    const gameDataWidget = screen.queryByTestId("game-data-widget");
    expect(gameDataWidget).not.toBeNull();
    const gameTypeSections = screen.queryAllByTestId(
      "game-data-widget-section"
    );
    expect(gameTypeSections).toHaveLength(3);
    const gameTypeSectionsTitle = screen.queryAllByTestId(
      "game-data-widget-section-title"
    );
    expect(gameTypeSectionsTitle).toHaveLength(3);
    expect(gameTypeSectionsTitle[0]).toHaveTextContent("Baker");
    expect(gameTypeSectionsTitle[1]).toHaveTextContent("Team");
    expect(gameTypeSectionsTitle[2]).toHaveTextContent("Baker Match Play");
  });
  it("Render Game Data Widget data - Individual Event Page", () => {
    render(<GameDataWidget page={PAGE_EVENT_SINGLE} data={[1, 2, 3]} />);
    const gameDataWidget = screen.queryByTestId("game-data-widget");
    expect(gameDataWidget).not.toBeNull();
    const gameTypeSections = screen.queryAllByTestId(
      "game-data-widget-section"
    );
    expect(gameTypeSections).toHaveLength(3);
    const gameTypeSectionsTitle = screen.queryAllByTestId(
      "game-data-widget-section-title"
    );
    expect(gameTypeSectionsTitle).toHaveLength(3);
    expect(gameTypeSectionsTitle[0]).toHaveTextContent("Baker");
    expect(gameTypeSectionsTitle[1]).toHaveTextContent("Team");
    expect(gameTypeSectionsTitle[2]).toHaveTextContent("Baker Match Play");
  });
});
