import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BoardPage } from "../pages/BoardPage";
import { TaskListPage } from "../pages/TaskListPage";

const boardPage = new BoardPage();
const taskListPage = new TaskListPage();

Given("I am on the board creation page", () => {
  cy.visit("/boards");
});

When("I create a new board named {string}", (name) => {
  boardPage.createBoard(name);
});

Then("I should see the board named {string}", (name) => {
  boardPage.verifyBoardExists(name);
});

When("I add a new list named {string}", (name) => {
  taskListPage.addList(name);
});

Then("I should see {int} lists created successfully", (count) => {
  taskListPage.verifyListCount(count);
});

When("I delete the list named {string}", (name) => {
  taskListPage.deleteList(name);
});

Then("I should see only {int} list remaining", (count) => {
  taskListPage.verifyListCount(count);
});
